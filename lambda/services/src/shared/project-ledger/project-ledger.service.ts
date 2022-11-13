import { Injectable, Logger } from '@nestjs/common';
import { Project } from '../entities/project.entity';
import { LedgerDbService } from '../ledger-db/ledger-db.service';
import { ProjectStatus } from './project-status.enum';

@Injectable()
export class ProjectLedgerService {
    constructor(private readonly logger: Logger, private ledger: LedgerDbService) {

    }

    public async createProject(project: Project): Promise<Project> {
        this.logger.log('Creating project', project)
        this.ledger.insertRecord(project)
        return project;
    }

    public async getProjectById(serialNo: string): Promise<Project> {
        const p = (await this.ledger.fetchRecords({
            'serialNo': serialNo
        })).map(domValue => {
                var newInstance = Object.create(Project);
                newInstance.constructor.apply(newInstance, domValue.fields());
                return newInstance;
            }
        )
        return (p.length <= 0) ? null: p[0];
    }

    public async updateProjectStatus(serialNo: string, status: ProjectStatus): Promise<void> {
        this.logger.log(`Updating project ${serialNo} status ${status}`)
        await this.ledger.updateRecords({
            'status': status.valueOf()
        }, {
            'serialNo': serialNo
        });
    }
}
