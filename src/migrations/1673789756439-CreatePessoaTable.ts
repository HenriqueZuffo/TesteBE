import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePessoaTable1673789756439 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'pessoa',
            columns: [
                {
                    name: 'id',
                    type: 'serial4',
                    isPrimary: true,
                    isNullable: false
                },
                {
                   name: 'nome',
                   type: 'varchar',
                   length: '150',
                   isNullable: false,
                },
                {
                    name: 'identificacao',
                    type: 'varchar',
                    length: '14',
                    isNullable: false
                },
                {
                    name: 'tipo',
                    type: 'int4',
                    isNullable: false
                },
                {
                    name: 'data_nascimento',
                    type: 'timestamp',
                    isNullable: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                }         
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pessoa')
    }

}
