

export default function NewPlayerForm() {

  
  return (
     <> 
    <form action="https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-A/players" method="post"
      id="new-player-form">
      <h3>New Player</h3>
      <div className="field">
        <input type="text" id="name" name="name" placeholder="Name" required />
      </div>
      <div className="field">
        <input type="text" id="breed" name="breed" placeholder="Breed" required />
      </div>
      <div className="field">
        <input type="text" id="status" name="status" placeholder="Status" required />
      </div>
      <div className="field">
        <input type='text' id="imageUrl" name="imageUrl" placeholder="Image Url" required/>
        </div>
       <button type="submit">Submit</button>
    </form>
      </>
    );
  }
  