<?php

class Murid extends Controller{
    public function index()
    {
        # code...
        $data['judul'] = 'Daftar Mahasiswa';
        $data['mrd'] = $this->model('Murid_model')->getAllMurid();
        $this->view('tamplats/headeer', $data);
        $this->view('murid/index', $data);
        $this->view('tamplats/footer');

    }

    public function detail($id)
    {
        # code...
        $data['judul'] = 'Daftar Mahasiswa';
        $data['mrd'] = $this->model('Murid_model')->getMuridById($id);
        $this->view('tamplats/headeer', $data);
        $this->view('murid/detail', $data);
        $this->view('tamplats/footer');

    }
}