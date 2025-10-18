import { Table, Column, Model, DataType, ForeignKey, BelongsToMany } from "sequelize-typescript";
import { Tour } from "./tour.model";
import { Destination } from "./destination.modal";

@Table({ 
    tableName: "tour_destinations", 
    timestamps: false 
})
export class TourDestination extends Model<TourDestination> {

    @ForeignKey(() => Tour)
    @Column(DataType.INTEGER)
    tour_id: number;

    @ForeignKey(() => Destination)
    @Column(DataType.INTEGER)
    destination_id: number;

   
}