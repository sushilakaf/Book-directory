import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { Model } from 'mongoose';
import { Book, BookDocument } from './models/book.model';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectModel('book') private readonly bookModel: Model<BookDocument>,
  ) {}

  finalAll() {
    const bookData = this.bookModel.find();
    return bookData;
  }
  async findOne(id: string) {
    const bookData = await this.bookModel.findOne({ where: { id } });
    return bookData;
  }
  async createBook(createBook: CreateBookDto) {
    const bookData = await this.bookModel.create(createBook);
    return bookData.save();
  }
  async update(id:string,updateBook:UpdateBookDto){
    const bookData=await this.bookModel.findById(id,updateBook);
    return bookData.save()
  }


  async deleteBook(id:string){
    const bookData= await this.bookModel.findByIdAndDelete(id);
    return bookData;
  }
}
