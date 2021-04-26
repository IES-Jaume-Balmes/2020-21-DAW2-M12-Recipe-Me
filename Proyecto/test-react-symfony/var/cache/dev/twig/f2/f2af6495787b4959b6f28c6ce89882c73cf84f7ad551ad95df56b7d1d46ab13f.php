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

/* list/index.html.twig */
class __TwigTemplate_73a3f97e7c84708f18e8b5d03c04fb8e37f61c1a4a3d5071b5a3809b9e2d88a4 extends Template
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
        // line 1
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "list/index.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "list/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "list/index.html.twig", 1);
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
        <div class=\"col-md-12\">
            ";
        // line 6
        if (twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 6, $this->source); })()), "user", [], "any", false, false, false, 6)) {
            // line 7
            echo "            <div class=\"card bg-light mb-3 mt-3\">
                <div class=\"card-body\">
                    <div class=\"card-header\">
                        List of top technology companies
                    </div>
                    <AmpContent>
                        <table class=\"table\">
                            <tr>
                                <th>Company Name</th>
                                <th>Market Value</th>
                            </tr>
                            ";
            // line 18
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["companies"]) || array_key_exists("companies", $context) ? $context["companies"] : (function () { throw new RuntimeError('Variable "companies" does not exist.', 18, $this->source); })()));
            foreach ($context['_seq'] as $context["key"] => $context["item"]) {
                // line 19
                echo "                            <tr>
                                <td>";
                // line 20
                echo twig_escape_filter($this->env, $context["key"], "html", null, true);
                echo "</td>
                                <td>";
                // line 21
                echo twig_escape_filter($this->env, $context["item"], "html", null, true);
                echo "</td>
                            </tr>
                            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 24
            echo "                        </table>
                    </NonAmpContent>
                </div>
            </div>
            ";
        } else {
            // line 29
            echo "            <AmpContent>
                <a href=\"";
            // line 30
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_login");
            echo "\" class=\"btn btn-info\">
                    You need to login to see the list 😜😜 >>
                </a>
            </NonAmpContent>
            ";
        }
        // line 35
        echo "        </div>
    </div>
</div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "list/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  125 => 35,  117 => 30,  114 => 29,  107 => 24,  98 => 21,  94 => 20,  91 => 19,  87 => 18,  74 => 7,  72 => 6,  67 => 3,  35 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{# templates/list/index.html.twig #} {% extends 'base.html.twig' %} {% block
body %}
<div class=\"container\">
    <div class=\"row\">
        <div class=\"col-md-12\">
            {% if app.user %}
            <div class=\"card bg-light mb-3 mt-3\">
                <div class=\"card-body\">
                    <div class=\"card-header\">
                        List of top technology companies
                    </div>
                    <AmpContent>
                        <table class=\"table\">
                            <tr>
                                <th>Company Name</th>
                                <th>Market Value</th>
                            </tr>
                            {% for key, item in companies %}
                            <tr>
                                <td>{{ key }}</td>
                                <td>{{ item }}</td>
                            </tr>
                            {% endfor %}
                        </table>
                    </NonAmpContent>
                </div>
            </div>
            {% else %}
            <AmpContent>
                <a href=\"{{ path('app_login') }}\" class=\"btn btn-info\">
                    You need to login to see the list 😜😜 >>
                </a>
            </NonAmpContent>
            {% endif %}
        </div>
    </div>
</div>
{% endblock %}", "list/index.html.twig", "C:\\Users\\frank\\proyecto_final_ciclo\\Proyecto\\test-react-symfony\\templates\\list\\index.html.twig");
    }
}
