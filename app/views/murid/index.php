<div class="container mt-5">

<div class="row">
    <div class="col-6">
        <h3>Daftar Murid</h3>
    </div>
    <ul class="list-group">
        <?php foreach( $data['mrd'] as $mrd): ?>
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <?= $mrd['nama']; ?>
                <a href="<?= BASEURL; ?>/murid/detail/<?= $mrd['id']; ?>" class="badge bg-primary rounded-pill">Detail</a>
            </li>
        <?php endforeach; ?>
    </ul>
</div>

</div>