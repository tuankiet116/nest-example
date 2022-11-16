import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    uuid: number;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column()
    name: string;
    @UpdateDateColumn()
    updated_at: Date
    @CreateDateColumn()
    created_at: Date
}