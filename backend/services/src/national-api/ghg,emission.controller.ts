import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Res,
  HttpStatus,
} from "@nestjs/common";
import { Response } from 'express';
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import {
  Action,
  AppAbility,
  CheckPolicies,
  PoliciesGuard,
  JwtAuthGuard,
  EmissionDto,
  GhgEmissionsService,
  Emission,
} from "@undp/carbon-services-lib";

@ApiTags("Emission")
@ApiBearerAuth()
@Controller("emissions")
export class GHGEmissionController {
  constructor(private emissionService: GhgEmissionsService) {}

  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard, PoliciesGuard)
  @CheckPolicies((ability: AppAbility) => ability.can(Action.Create, Emission))
  @Post()
  async addEmission(@Body() emissions: EmissionDto, @Request() req, @Res() res: Response) {
    try {
      const response = await this.emissionService.create(emissions, req.user);

      // Set the response status and send the response data
      res.status(response.status).json(response.data);
    } catch (error) {
      // Handle errors and set the appropriate status code
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
  }

  
}