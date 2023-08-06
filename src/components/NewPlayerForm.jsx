

export default function NewPlayerForm() {

  
  return (
     <> 
    <form action="https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-A/players" method="post"
      id="new-player-form">
      <h3>New Player</h3>
      <div className="field">
        <input type="text" id="name" name="name" placeholder="Name" required />
        <small></small>
      </div>
      <div className="field">
        <input type="text" id="breed" name="breed" placeholder="Breed" required />
        <small></small>
      </div>
      <div className="field">
        <input type="text" id="status" name="status" placeholder="Status" required />
        <small></small>
      </div>
      <div className="field">
        <input type='file' id="imageUrl" name="imageUrl" src="#" alt="imageUrl"/>
        </div>
          <button type="submit">Submit</button>
    </form>
      </>
    );
  }
  