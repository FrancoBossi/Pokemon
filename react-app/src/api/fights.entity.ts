import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Fight {
  @PrimaryColumn({ type: "varchar", length: 36 })
  id!: string; // ID del combate (UUID)

  @Column({ type: "varchar", length: 36 })
  winner!: string; // ID del pokemon ganador

  @Column({ type: "varchar", length: 36 })
  loser!: string; // ID del pokemon perdedor
}
