import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './models/book.model';


@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

@Post('book')
async createBook(@Body() createBookDto:CreateBookDto){
  const newBook=await this.bookService.createBook(createBookDto)
  return newBook;

}
@Get()
findAll(){
  return this.bookService.finalAll();
}
@Get(':/bookId')
findOne(@Param('bookId') id:string){
  return this.bookService.findOne(id);

}
@Patch('/:bookId')
update(@Param('bookId') id:string,
@Body() updateBookDto:UpdateBookDto){
  return this.bookService.update(id,updateBookDto)

}
@Delete('/:bookId')
async deletBook(@Param('bookId') id:string){
return await this.bookService.deleteBook(id)
  
}



}

  

 

