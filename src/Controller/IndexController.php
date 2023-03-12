<?php
declare(strict_types=1);

namespace App\Controller;

/**
 * Index Controller
 *
 * @method \App\Model\Entity\Index[]|\Cake\Datasource\ResultSetInterface paginate($object = null, array $settings = [])
 */
class IndexController extends AppController
{
    /**
     * index method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function index()
    {
    }

    /**
     * upload method
     *
     * @return \Cake\Http\Response|null|void Renders view
     */
    public function upload()
    {
        if ($this->request->is('post')) {
            $file = $this->request->getData('file');
            $name = $file->getClientFilename();
            $fileinfo = pathinfo($name);
            $ext = null;
            if (isset($fileinfo['extension'])) {
                $ext = $fileinfo['extension'];
            }
            $hash = hash('md5', (string)rand());
            $path = WWW_ROOT . DS . 'upload' . DS . "${hash}.${ext}";
            $file->moveTo($path);

            $this->viewBuilder()->disableAutoLayout();
            $filename = "/upload/${hash}.${ext}";

            $this->set(compact(['filename']));
        }
    }
}
