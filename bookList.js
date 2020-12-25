import React, { Component } from 'react'

export default class BookList extends Component {
        
    render() {
        return (
            <div className="booklist">
                <ul>
                    {this.props.bookList.map((book) => (
                        <li key={book._id}>
                            <div className="image">
                                <img src={book.image} alt={book.bookName} />
                            </div>
                            <div className="description">
                                <div className="content">
                                    <b>Book Name: </b> {book.bookName}<br />
                                    <b>Author:</b>{book.author}<br />
                                    <b>Version</b>{book.version}<br />
                                </div>
                                <div className="options">
                                    <select value={this.props.value} onChange={this.props.handleChange}>
                                        <option >Select Option</option>
                                        <option value="Currrently Reading">Currrently Reading</option>
                                        <option value="Wants To Read">Wants To Read</option>
                                        <option value="Already Read">Already Read</option>
                                    </select> 
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}