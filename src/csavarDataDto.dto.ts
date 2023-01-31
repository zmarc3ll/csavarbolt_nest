import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class csavarDataDto {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    tipus: string;
    @Column()
    hossz: number;
    @Column()
    keszlet: number;
    @Column()
    ar: number;
}