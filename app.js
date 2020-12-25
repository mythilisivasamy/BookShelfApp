import React, { Component } from 'react'
import BookList from './components/bookList';
import data from "./data.json";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: data.books,
      //currentlyReading: [],
      //wantsToRead: [],
      //alreadyRead: [],
      value:"",
    }
  }

  handleChange(evt) {
    this.setState({value:evt.target.value});
  }

  render() {
    return (
      <div className="container">

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
              value={this.state.value} />

            <div className="filter-container">
              <div className="currently-reading">
                Currently Reading
                </div>
              <div className="Just Read">
                Just Read
                </div>
              <div className="Wants to Read">
                Wants To Read
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
