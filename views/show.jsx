const React = require('react')
const Default = require('./layouts/default')

function Show ({bread, index}) {
  console.log(bread.name)
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{bread.name}</h3>
        <p>
          {bread.hasGlutenParagraph()}
        </p>
        <p>{bread.getBakedBy()}</p>
        <img src={bread.image} alt={bread.name} />
        <a href={`/breads/${bread._id}/edit`}>
          <button>Edit</button>
        </a>
        <form action = {`/breads/${bread._id}?_method=DELETE`} method= 'POST'>
          <input type='submit' value='DELETE'/>
        </form>
      </Default>
      //the "?_method=DELETE" is the method override
    )
}


module.exports = Show

//ternary operator ^ line 12-14 (first span = true, second = false)