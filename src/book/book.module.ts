import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, bookSchema } from './models/book.model';



@Module({
  imports:[MongooseModule.forFeature([{name:'book',schema:bookSchema}])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
