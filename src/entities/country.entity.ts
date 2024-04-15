import { Field, InputType, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Length } from "class-validator";

export type Continent = "EU" | "AF" | "AS" | "OC" | "SA" | "NA";

@ObjectType()
@Entity()
export class Country {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  @Length(50)
  name: string;

  @Field()
  @Column()
  @Length(2, 2)
  code: string;

  @Field()
  @Column()
  emoji: string;

  @Field()
  @Column()
  continent: Continent;
}

@InputType()
export class CreateCountryInput {
  @Field()
  name: string;
  @Field()
  code: string;
  @Field()
  emoji: string;
  @Field()
  continent: Continent;
}
