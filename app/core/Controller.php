<?php

class Controller{
    public function view($view, $data = [])
    {
        # code...
        require_once '../app/views/'. $view.'.php';
    }

    public function model($model)
    {
        # code...
        require_once '../app/models/'.$model.'.php';
        return new $model;
    }
}