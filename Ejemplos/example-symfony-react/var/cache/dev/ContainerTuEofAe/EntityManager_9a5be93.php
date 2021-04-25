<?php

namespace ContainerTuEofAe;
include_once \dirname(__DIR__, 4).'/vendor/doctrine/persistence/lib/Doctrine/Persistence/ObjectManager.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).'/vendor/doctrine/orm/lib/Doctrine/ORM/EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolder9f9dd = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializer6da5d = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties5bc65 = [
        
    ];

    public function getConnection()
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'getConnection', array(), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'getMetadataFactory', array(), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'getExpressionBuilder', array(), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'beginTransaction', array(), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->beginTransaction();
    }

    public function getCache()
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'getCache', array(), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->getCache();
    }

    public function transactional($func)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'transactional', array('func' => $func), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->transactional($func);
    }

    public function commit()
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'commit', array(), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->commit();
    }

    public function rollback()
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'rollback', array(), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'getClassMetadata', array('className' => $className), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'createQuery', array('dql' => $dql), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'createNamedQuery', array('name' => $name), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'createQueryBuilder', array(), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'flush', array('entity' => $entity), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'clear', array('entityName' => $entityName), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->clear($entityName);
    }

    public function close()
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'close', array(), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->close();
    }

    public function persist($entity)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'persist', array('entity' => $entity), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'remove', array('entity' => $entity), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'refresh', array('entity' => $entity), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'detach', array('entity' => $entity), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'merge', array('entity' => $entity), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'getRepository', array('entityName' => $entityName), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'contains', array('entity' => $entity), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'getEventManager', array(), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'getConfiguration', array(), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'isOpen', array(), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'getUnitOfWork', array(), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'getProxyFactory', array(), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'initializeObject', array('obj' => $obj), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'getFilters', array(), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'isFiltersStateClean', array(), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'hasFilters', array(), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return $this->valueHolder9f9dd->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializer6da5d = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHolder9f9dd) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolder9f9dd = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolder9f9dd->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, '__get', ['name' => $name], $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        if (isset(self::$publicProperties5bc65[$name])) {
            return $this->valueHolder9f9dd->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder9f9dd;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder9f9dd;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, '__set', array('name' => $name, 'value' => $value), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder9f9dd;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolder9f9dd;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, '__isset', array('name' => $name), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder9f9dd;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolder9f9dd;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, '__unset', array('name' => $name), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolder9f9dd;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolder9f9dd;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, '__clone', array(), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        $this->valueHolder9f9dd = clone $this->valueHolder9f9dd;
    }

    public function __sleep()
    {
        $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, '__sleep', array(), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;

        return array('valueHolder9f9dd');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializer6da5d = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializer6da5d;
    }

    public function initializeProxy() : bool
    {
        return $this->initializer6da5d && ($this->initializer6da5d->__invoke($valueHolder9f9dd, $this, 'initializeProxy', array(), $this->initializer6da5d) || 1) && $this->valueHolder9f9dd = $valueHolder9f9dd;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolder9f9dd;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolder9f9dd;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
