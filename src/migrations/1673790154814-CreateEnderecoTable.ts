import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEnderecoTable1673790154814 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'endereco',
        columns: [
          {
            name: 'id',
            type: 'serial4',
            isPrimary: true,
            isNullable: false,
          },
          {
            name: 'cep',
            type: 'varchar',
            length: '9',
            isNullable: false,
          },
          {
            name: 'logradouro',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'numero',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'bairro',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'complemento',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'cidade',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'uf',
            type: 'varchar',
            length: '2',
            isNullable: false,
          },
          {
            name: 'tipo',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'pessoaId',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['pessoaId'],
            referencedTableName: 'pessoa',
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropTable('endereco');
  }
}
