import BooksModel from "./BooksModel";

class ShelfCurrentLoans {
    book: BooksModel;
    daysLeft: number;

    constructor(book: BooksModel, daysLeft:number){
        this.book = book;
        this.daysLeft = daysLeft;
    }
}

export default ShelfCurrentLoans;