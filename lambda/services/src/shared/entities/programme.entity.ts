import { PRECISION } from 'carbon-credit-calculator/dist/esm/calculator';
import { SectoralScope } from 'serial-number-gen';
import { Entity, Column, PrimaryColumn } from 'typeorm';
import { AgricultureProperties } from '../dto/agriculture.properties';
import { ProgrammeProperties } from '../dto/programme.properties';
import { SolarProperties } from '../dto/solar.properties';
import { Sector } from '../enum/sector.enum';
import { ProgrammeStage } from '../programme-ledger/programme-status.enum';
import { EntitySubject } from './entity.subject';

@Entity()
export class Programme implements EntitySubject {

    @PrimaryColumn()
    programmeId: string;

    @Column({nullable: true})
    serialNo: string;

    @Column()
    title: string;

    @Column({
        type: "enum",
        enum: SectoralScope,
        array: false
    })
    sectoralScope: SectoralScope;

    @Column()
    sector: Sector;

    @Column()
    countryCodeA2: string;


    @Column({
        type: "enum",
        enum: ProgrammeStage,
        array: false,
        default: ProgrammeStage.AWAITING_AUTHORIZATION
    })
    currentStage: ProgrammeStage;

    @Column()
    startTime: number;

    @Column()
    endTime: number;

    @Column({type: "decimal", precision: 10, scale: PRECISION})
    creditChange: number;

    @Column({type: "decimal", precision: 10, scale: PRECISION})
    creditIssued: number;

    @Column({type: "decimal", precision: 10, scale: PRECISION})
    creditBalance: number;

    @Column({type: "decimal", precision: 10, scale: PRECISION, default: 0})
    creditTransferred: number;

    @Column({nullable: true})
    constantVersion: string;

    @Column("string", { array: true })
    proponentTaxVatId: string;

    @Column()
    companyId: number;

    @Column()
    creditUnit: string;

    @Column({
        type: 'jsonb',
        array: false
    })
    programmeProperties: ProgrammeProperties;

    @Column({
        type: 'jsonb',
        array: false,
        nullable: true
    })
    agricultureProperties: AgricultureProperties;

    @Column({
        type: 'jsonb',
        array: false,
        nullable: true
    })
    solarProperties: SolarProperties;

    @Column({type: "bigint"})
    txTime: number;

    @Column({type: "bigint"})
    createdTime: number;

}
