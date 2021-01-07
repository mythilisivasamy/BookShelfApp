import React, { Component } from 'react'

export default class CurrentlyReading extends Component {
    render() {
        return (
                <div className="booklist">
                    <h3>CurrentlyReading</h3>
                    <ul>
                        {this.props.books.map((book) => (
                            <li key={book._id}>
                                <div>
                                    <div className="image1">
                                        <img src={book.image} alt={book.bookName} />
                                    </div>
                                </div >
                                <br/>
                            </li>
                        ))}
                    </ul>
                 </div>
         )}
}
