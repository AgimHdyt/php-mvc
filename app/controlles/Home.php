<?php

class Home extends Controller {
    public function index()
    {
        # code...
        $data['judul'] = 'Home';
        $data['nama'] = $this->model('User_model')->getUser();
        $this->view('tamplats/headeer',$data);
        $this->view('home/index',$data);
        $this->view('tamplats/footer');
    }
}