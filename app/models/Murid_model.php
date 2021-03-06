<?php

class Murid_model{

    private $table = 'murid';
    private $db;

    public function __construct()
    {
        # code...
        $this->db = new Database;
    }

    public function getAllMurid()
    {
        # code...
        // $this->db->query('SELECT * FROM ' . $this->table);
        // return $this->db->resultSet();
        $this->db->query('SELECT * FROM ' . $this->table);
        return $this->db->resultSet();

        
    }

    public function getMuridById($id)
    {
        # code...
        $this->db->query('SELECT * FROM ' . $this->table .' WHERE id=:id');
        $this->db->bind('id', $id);
        return $this->db->single();

        
    }
}