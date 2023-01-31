import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class rendelesDataDto {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    csavar_id: number;
    @Column()
    db: number;
}
