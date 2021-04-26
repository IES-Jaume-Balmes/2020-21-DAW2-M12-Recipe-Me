<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* registration/index.html.twig */
class __TwigTemplate_1e044e64de2cce81a24eb0b9d95b199a93627bed7cd6021a2ca8f64d0b0ad2b0 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 2
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "registration/index.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "registration/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "registration/index.html.twig", 2);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 3
        echo "<div class=\"container\">
    <div class=\"row\">
        <div class=\"col-md-10 ml-md-auto\">
            <div class=\"card bg-light mb-3 mt-5\" style=\"width: 800px\">
                <div class=\"card-body\">
                    <div class=\"card-header mb-3\">Registration Form</div>
                    ";
        // line 9
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 9, $this->source); })()), 'form_start');
        echo "
                    <div class=\"form_group\">
                        <div class=\"col-md-12 mb-3\">
                            ";
        // line 12
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 12, $this->source); })()), "name", [], "any", false, false, false, 12), 'row', ["attr" => ["class" => "form-control"]]);
        echo "
                        </div>
                    </div>
                    <div class=\"form_group\">
                        <div class=\"col-md-12 mb-3\">
                            ";
        // line 17
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 17, $this->source); })()), "email", [], "any", false, false, false, 17), 'row', ["attr" => ["class" => "form-control"]]);
        echo "
                        </div>
                    </div>
                    <div class=\"form_group\">
                        <div class=\"col-md-12 mb-3\">
                            ";
        // line 22
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 22, $this->source); })()), "password", [], "any", false, false, false, 22), "first", [], "any", false, false, false, 22), 'row', ["attr" => ["class" => "form-control"]]);
        // line 23
        echo "
                        </div>
                    </div>
                    <div class=\"form_group\">
                        <div class=\"col-md-12 mb-3\">
                            ";
        // line 28
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 28, $this->source); })()), "password", [], "any", false, false, false, 28), "second", [], "any", false, false, false, 28), 'row', ["attr" => ["class" => "form-control"]]);
        // line 29
        echo "
                        </div>
                    </div>
                    <div class=\"form-group\">
                        <div class=\"col-md-8 col-md-offset-4\" style=\"margin-top:5px;\">
                            <button type=\"submit\" class=\"btn btn-primary\">
                                <i class=\"fa fa-btn fa-user\"></i> Register
                            </button>
                        </div>
                    </div>
                    ";
        // line 39
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 39, $this->source); })()), 'form_end');
        echo "
                </div>
            </div>
        </div>
    </div>
</div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "registration/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  120 => 39,  108 => 29,  106 => 28,  99 => 23,  97 => 22,  89 => 17,  81 => 12,  75 => 9,  67 => 3,  35 => 2,);
    }

    public function getSourceContext()
    {
        return new Source("{# templates/registration/index.html.twig #}
{% extends 'base.html.twig' %} {% block body %}
<div class=\"container\">
    <div class=\"row\">
        <div class=\"col-md-10 ml-md-auto\">
            <div class=\"card bg-light mb-3 mt-5\" style=\"width: 800px\">
                <div class=\"card-body\">
                    <div class=\"card-header mb-3\">Registration Form</div>
                    {{ form_start(form) }}
                    <div class=\"form_group\">
                        <div class=\"col-md-12 mb-3\">
                            {{ form_row(form.name, {'attr': {'class': 'form-control'}}) }}
                        </div>
                    </div>
                    <div class=\"form_group\">
                        <div class=\"col-md-12 mb-3\">
                            {{ form_row(form.email, {'attr': {'class': 'form-control'}}) }}
                        </div>
                    </div>
                    <div class=\"form_group\">
                        <div class=\"col-md-12 mb-3\">
                            {{ form_row(form.password.first, {'attr': {'class':
                            'form-control'}}) }}
                        </div>
                    </div>
                    <div class=\"form_group\">
                        <div class=\"col-md-12 mb-3\">
                            {{ form_row(form.password.second, {'attr': {'class':
                            'form-control'}}) }}
                        </div>
                    </div>
                    <div class=\"form-group\">
                        <div class=\"col-md-8 col-md-offset-4\" style=\"margin-top:5px;\">
                            <button type=\"submit\" class=\"btn btn-primary\">
                                <i class=\"fa fa-btn fa-user\"></i> Register
                            </button>
                        </div>
                    </div>
                    {{ form_end(form) }}
                </div>
            </div>
        </div>
    </div>
</div>
{% endblock %}", "registration/index.html.twig", "C:\\Users\\frank\\proyecto_final_ciclo\\Proyecto\\test-react-symfony\\templates\\registration\\index.html.twig");
    }
}
