import { useState } from 'react';

function TextInputExample() {
  const [text, setText] = useState('');

  return (
    <div>
      <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Masukkan teks di sini"
        className="w-full max-w-sm min-w-[200px]"
      />
      <p className='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'>Isi input: {text}</p>
    </div>
  );
}

export default TextInputExample;
