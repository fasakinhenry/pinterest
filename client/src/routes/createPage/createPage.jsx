import './createPage.css';
import IKImage from './../../components/image/image';

const CreatePage = () => {
  return (
    <div className='createPage'>
      <div className='createTop'>
        <h1>Create Pin</h1>
        <button>Publish</button>
      </div>
      <div className='createBottom'>
        <form className='upload'>
          <div className='uploadTitle'>
            <IKImage path='/general/upload.svg' alt='upload' />
            <span>Choose a file or drag and drop it here</span>
          </div>
          <div className='uploadInfo'>
            We recommend using high quality .jpg files less than 20 MB or .mp4
            files less than 200 MB.
          </div>
        </form>
        <form className='createForm'>
          <div className='createFormItem'>
            <label htmlFor='description'>Description</label>
            <textarea
              rows={6}
              type='text'
              placeholder='Add a detailed description'
              id='description'
              name='description'
            />
          </div>
          <div className='createFormItem'>
            <label htmlFor='link'>Link</label>
            <input type='text' placeholder='Add a link' id='link' name='link' />
          </div>
          <div className='createFormItem'>
            <label htmlFor='board'>Board</label>
            <select name='board' id='board'>
              <option>Choose a board</option>
              <option value='1'>Board 1</option>
              <option value='2'>Board 2</option>
              <option value='3'>Board 3</option>
            </select>
          </div>
          <div className='createFormItem'>
            <label htmlFor='tags'>Tagged topics</label>
            <input type='text' placeholder='Add a tag' name='tags' id='tags' />
            <small>Don't worry, people won't see your tags</small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePage;
