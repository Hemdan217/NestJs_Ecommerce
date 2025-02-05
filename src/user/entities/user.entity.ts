import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

// Enum for Role
export enum Role {
  Admin = 'Admin',
  User = 'User',
}

// Enum for gender
export enum Gender {
  Male = 'male',
  Female = 'female',
}




export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true }) // Automatically adds createdAt and updatedAt fields
export class User {
  @Prop({ required: true, minlength: 3, maxlength: 30 })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true, minlength: 3, maxlength: 20 })
  password: string;

  @Prop({ required: true, enum: Role })
  role: Role;

  @Prop({ required: false })
  avatar?: string;

  @Prop({ required: false })
  age?: number;

  @Prop({ required: false, minlength: 11, maxlength: 11 })
  phoneNumber?: string;

  @Prop({ required: false })
  address?: string;

  @Prop({ default: false })
  active: boolean;

  @Prop({ required: false })
  verificationCode?: string;

  @Prop({ required: false, enum: Gender })
  gender?: Gender;
}

export const UserSchema = SchemaFactory.createForClass(User);
