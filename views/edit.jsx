const React = require('react')
const Default = require('./layouts/default')

function Edit({bread, bakers}) {
    return (
      <Default>
        <h2>Edit a bread</h2>
        <form action={`/breads/${bread._id}?_method=PUT`} method='POST'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={bread.name}
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            defaultValue={bread.image}
          />
          <label htmlFor="hasGluten">Has Gluten?</label>
          <input
            type="checkbox"
            name="hasGluten"
            id="hasGluten"
            defaultChecked={bread.hasGluten}
          />
          <label htmlFor="baker">Baker</label>
          <select defaultValue= {bread.baker} name="baker" id="baker">
            {bakers.map(baker => {
              return (
                <option key={baker._id} value= {baker._id}>{baker.name}</option>
              )
            })}
          </select>
          <br />
          <input type="submit"/>
        </form>
      </Default>
    )
}

module.exports = Edit