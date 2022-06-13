<?php
class About extends Controller {

    public function index($nama = 'Agim', $status = 'Pelajar')
    {
        # code...
        // echo "Halo nama saya $nama, Dan status saya $status";
        $data['nama'] = $nama;
        $data['status'] = $status;
        $data['judul'] = 'About';
        $this->view('tamplats/headeer', $data);
        $this->view('about/index', $data);
        $this->view('tamplats/footer');
    }
    public function page()
    {
        # code...
        // echo 'About/page';
        $data['judul'] = 'Page';
        $this->view('tamplats/headeer', $data);
        $this->view('about/page');
        $this->view('tamplats/footer');
    }
}