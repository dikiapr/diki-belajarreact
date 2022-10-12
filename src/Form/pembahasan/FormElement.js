import React from "react";

class FormElement extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nama: "",
      jurusan: "",
      gender: "",
      alamat: "",
      member: false,
    };
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    const message = `
    nama: ${this.state.nama}
    jurusan: ${this.state.jurusan}
    gender: ${this.state.gender}
    alamat: ${this.state.alamat}
    member: ${this.state.member ? "YES" : "NO"}`;
    alert(message);
    this.setState({
      nama: "",
      jurusan: "",
      gender: "",
      alamat: "",
      member: false,
    });
  }

  render() {
    return (
      <div style={{ margin: "100px auto", border: "1px solid grey", padding: "20px" }}>
        <form onSubmit={this.onSubmitEventHandler}>
          <label>Nama: </label>
          <input type="text" name="nama" onChange={(e) => this.setState({ nama: e.target.value })} value={this.state.nama} />
          <br />
          <label>Jurusan: </label>
          <select name="jurusan" onChange={(e) => this.setState({ jurusan: e.target.value })}>
            <option value="">Pilih Jurusan</option>
            <option value="Teknik Informatika">Teknik Informatika</option>
            <option value="Sistem Informasi">Sistem Informasi</option>
            <option value="Desain Komunikasi Visual">Desain Komunikasi Visual</option>
          </select>
          <br />
          <label>Jenis Kelamin: </label>
          <input type="radio" value="Laki-laki" name="gender" onChange={(e) => this.setState({ gender: e.target.value })} /> Laki-laki
          <input type="radio" value="Perempuan" name="gender" onChange={(e) => this.setState({ gender: e.target.value })} /> Perempuan
          <br />
          <label>Alamat: </label>
          <br />
          <textarea cols="30" rows="10" name="alamat" onChange={(e) => this.setState({ alamat: e.target.value })} value={this.state.alamat} />
          <br />
          <label>Member: </label>
          <input type="checkbox" checked={this.state.member} name="member" onChange={(e) => this.setState({ member: e.target.checked })} />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default FormElement;
