import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blog-info'>

            <h4>Ques-1: What are the differences between  SQL and NoSQL?</h4>
            <br />
            <p> Ans: SQL databases are primarily called as Relational Databases (RDBMS); whereas NoSQL database are primarily called as non-relational or distributed database. SQL databases follow ACID properties (Atomicity, Consistency, Isolation and Durability) whereas the NoSQL database follows the Brewers CAP theorem (Consistency, Availability and Partition tolerance).SQL databases are table-based on the other hand NoSQL databases are either key-value pairs, document-based, graph databases or wide-column stores.</p>


            <h4>Ques-2:What is JWT, and how does it work?</h4>
            <br />
            <p>Ans:JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>

            <h4>Ques-3:What is the difference between javascript and NodeJS?</h4>
            <br />
            <p>
                Ans:NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.Javascript is capable enough to add HTML and play with the DOM. Nodejs does not have capability to add HTML tags.

            </p>

            <h4>Ques-4:How does NodeJS handle multiple requests at the same time?</h4>
            <br />
            <p>Ans: NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>

        </div>
    );
};

export default Blogs;