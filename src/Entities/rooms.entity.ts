import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('rooms')
export class RoomEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    user_id: number;
}