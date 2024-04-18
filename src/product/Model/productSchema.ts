import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Product{
    @Prop()
    title: String
    @Prop()
    description: String
    @Prop()
    price:Number
}

export const ProductSchema =  SchemaFactory.createForClass(Product)