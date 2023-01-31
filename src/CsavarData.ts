import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import RendelesData from "./RendelesData"; 

@Entity()
export default class CsavarData {

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

    @ManyToOne(() => RendelesData, (rendeles) => rendeles.csavarok)
    rendeles: RendelesData;
}