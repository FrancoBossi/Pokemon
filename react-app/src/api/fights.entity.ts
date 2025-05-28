import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Fight {
  @PrimaryColumn({ type: "varchar", length: 36 })
  id!: string; 

  @Column({ type: "varchar", length: 36 })
  winner!: string; 

  @Column({ type: "varchar", length: 36 })
  loser!: string;
}
