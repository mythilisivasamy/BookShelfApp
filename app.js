import React, { Component } from 'react'
import BookList from './components/bookList';
import CurrentlyReading from './components/currentlyReading';
import WantsToRead from './components/wantsToRead';
import Read from './components/read';
import data from "./data.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: data.books,
      currentlyReading: [],
      wantsToRead: [],
      read: [],
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id, evt) {
    const value = evt.target.value;
    let bookToMove;
    let len = this.state.books.length;
    let books = this.state.books.slice();

    for (let i = 0; i < len; i++) {
      if (books[i]._id === id)
        bookToMove = books[i];
    } // end of for loop

    let currentlyReading = this.state.currentlyReading.slice();
    let wantsToRead = this.state.wantsToRead.slice();
    let read = this.state.read.slice();

    //currently reading

    if (value === "currentlyReading") {
      let isExist = false;
      currentlyReading.forEach(book => {
        if (book._id === bookToMove._id)
          isExist = true;
      })
      if (!isExist)
        currentlyReading.push(bookToMove);
    } //end of if

    //wants to read
    if (value === "wantsToRead") {
      let isExist = false;
      wantsToRead.forEach(book => {
        if (book._id === bookToMove._id)
          isExist = true;
      })
      if (!isExist)
        wantsToRead.push(bookToMove);
    } //end of if

    // Already Read
    if (value === "read") {
      let isExist = false;
      read.forEach(book => {
        if (book._id === bookToMove._id)
          isExist = true;
      })
      if (!isExist)
        read.push(bookToMove);
    } //end of if
    this.setState({
      books: this.state.books,
      currentlyReading: currentlyReading,
      wantsToRead:wantsToRead,
      read:read
    });
  }

  render() {
    return (
      <div className="container" >

        <header>
          <div className="header">
            BookShelf App
          </div>
        </header>

        <main>
          <div className="main">
            <BookList
              bookList={this.state.books}
              handleChange={this.handleChange}
              value={this.state.value}
            />
            <div className="filter-container">
              <div className="currently-reading">
                <CurrentlyReading books={this.state.currentlyReading} />
                </div>
              <div className="Just Read">
                <Read books={this.state.read} />
                </div>
              <div className="Wants to Read">
                <WantsToRead books={this.state.wantsToRead} />
                </div>
            </div>
          </div>
        </main>

        <footer>
          <div className="footer">
            All rights Reserved
          </div>
        </footer>

      </div>
    )
  }
}
