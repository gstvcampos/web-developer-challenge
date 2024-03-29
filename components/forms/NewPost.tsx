export default function NewPost() {
  return (
    <form className="flex flex-col">
      <input className="input bg-base-200" type="text" name="author" />
      <input className="input bg-base-200" type="text" name="content" />
      <div>
        <button className="btn btn-ghost underline">Descartar</button>
        <button className="bg-primary btn">Publicar</button>
      </div>
    </form>
  )
}
