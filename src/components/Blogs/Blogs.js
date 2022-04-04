import React from 'react';

const Blogs = () => {
    return (
        <div style={{ backgroundColor: '#F3F4F6', position: 'absolute', height: '88vh', width: '100%'}} className="pt-5">
            <p className='fs-2 text-center mt-4'>People want to know</p>
            <div className="container">
               <div>
               <div>
                    <h4>What is Context API?</h4>
                    <p>Without passing props to every level, we can easily access data at different levels by using Context API. It solves the problem of props drilling. Suppose, we have 3 components A, B, C. Here, A is the parent component of B. B is the parent component of C. If we need to pass data from A to C, we can not pass data directly from A to B. Using props, we need to pass to data from A to B then C using props. On the other hand, using context API, we can dirctly pass data from A to C. It is a way for a React app to effectively produce global variables that can be passed around.</p>
                </div>
                <div>
                    <h4>What is Semantic tag?</h4>
                    <p>A semantic tag is a tag that clearly gives a meaning to the content of a tag. Using semantic tag both browser and human understand the content of a tag. Example of some semantic tags are header, footer, article, form, table, section, aside etc. It has great  accessibility. When we make a page using semantic tag, it is easier to read. Every semantic tags are the indrution of the part of the code. When we use a header tag in website, anyone can easily understand it that this section is header part of website.</p>
                </div>

               </div>
            </div>
        </div>
    );
};

export default Blogs;