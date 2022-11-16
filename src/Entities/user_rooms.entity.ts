import { PrimaryGeneratedColumn, Column, Entity, TableForeignKey } from 'typeorm';

@Entity('user_rooms')
export class UserRoomEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    user_id: number;
}