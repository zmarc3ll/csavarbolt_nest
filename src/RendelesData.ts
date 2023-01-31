import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import CsavarData from "./CsavarData"

@Entity()
export default class RendelesData {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    csavar_id: number;
    
    @Column()
    db: number;

    @OneToMany(() => CsavarData, (csavar) => csavar.rendeles)
    csavarok: CsavarData[];
}
