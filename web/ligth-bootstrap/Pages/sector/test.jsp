<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    
    <%@include file="../includes/cssInclude.jsp" %>
    
</head>

<body>
    <div class="wrapper">
        <div class="sidebar" data-color="orange" data-image="../../assets/img/sidebar-5.jpg">
            <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | blue | green | orange | red"

        Tip 2: you can also add an image using data-image tag
    -->
            <div class="sidebar-wrapper">
                <div class="logo">
                    <a href="http://www.creative-tim.com" class="simple-text logo-mini">
                        Ct
                    </a>
                    <a href="http://www.creative-tim.com" class="simple-text logo-normal">
                        Creative Tim
                    </a>
                </div>
                <div class="user">
                    <div class="photo">
                        <img src="../../assets/img/default-avatar.png" />
                    </div>
                    <div class="info ">
                        <a data-toggle="collapse" href="#collapseExample" class="collapsed">
                            <span>Tania Andrew
                                <b class="caret"></b>
                            </span>
                        </a>
                        <div class="collapse" id="collapseExample">
                            <ul class="nav">
                                <li>
                                    <a class="profile-dropdown" href="#pablo">
                                        <span class="sidebar-mini">MP</span>
                                        <span class="sidebar-normal">My Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="profile-dropdown" href="#pablo">
                                        <span class="sidebar-mini">EP</span>
                                        <span class="sidebar-normal">Edit Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a class="profile-dropdown" href="#pablo">
                                        <span class="sidebar-mini">S</span>
                                        <span class="sidebar-normal">Settings</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul class="nav">
                    <li class="nav-item ">
                        <a class="nav-link" href="../dashboard.html">
                            <i class="nc-icon nc-chart-pie-35"></i>
                            <p>Dashboard</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="collapse" href="#componentsExamples">
                            <i class="nc-icon nc-app"></i>
                            <p>
                                Components
                                <b class="caret"></b>
                            </p>
                        </a>
                        <div class="collapse " id="componentsExamples">
                            <ul class="nav">
                                <li class="nav-item ">
                                    <a class="nav-link" href="../components/buttons.html">
                                        <span class="sidebar-mini">B</span>
                                        <span class="sidebar-normal">Buttons</span>
                                    </a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="../components/grid.html">
                                        <span class="sidebar-mini">GS</span>
                                        <span class="sidebar-normal">Grid System</span>
                                    </a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="../components/panels.html">
                                        <span class="sidebar-mini">P</span>
                                        <span class="sidebar-normal">Panels</span>
                                    </a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="../components/sweet-alert.html">
                                        <span class="sidebar-mini">SA</span>
                                        <span class="sidebar-normal">Sweet Alert</span>
                                    </a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="../components/notifications.html">
                                        <span class="sidebar-mini">N</span>
                                        <span class="sidebar-normal">Notifications</span>
                                    </a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="../components/icons.html">
                                        <span class="sidebar-mini">I</span>
                                        <span class="sidebar-normal">Icons</span>
                                    </a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="../components/typography.html">
                                        <span class="sidebar-mini">T</span>
                                        <span class="sidebar-normal">Typography</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="collapse" href="#formsExamples">
                            <i class="nc-icon nc-notes"></i>
                            <p>
                                Forms
                                <b class="caret"></b>
                            </p>
                        </a>
                        <div class="collapse show" id="formsExamples">
                            <ul class="nav">
                                <li class="nav-item ">
                                    <a class="nav-link" href="../forms/regular.html">
                                        <span class="sidebar-mini">Rf</span>
                                        <span class="sidebar-normal">Regular Forms</span>
                                    </a>
                                </li>
                                <li class="nav-item active">
                                    <a class="nav-link" href="../forms/extended.html">
                                        <span class="sidebar-mini">Ef</span>
                                        <span class="sidebar-normal">Extended Forms</span>
                                    </a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="../forms/validation.html">
                                        <span class="sidebar-mini">Vf</span>
                                        <span class="sidebar-normal">Validation Forms</span>
                                    </a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="../forms/wizard.html">
                                        <span class="sidebar-mini">W</span>
                                        <span class="sidebar-normal">Wizard</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="collapse" href="#tablesExamples">
                            <i class="nc-icon nc-paper-2"></i>
                            <p>
                                Tables
                                <b class="caret"></b>
                            </p>
                        </a>
                        <div class="collapse " id="tablesExamples">
                            <ul class="nav">
                                <li class="nav-item ">
                                    <a class="nav-link" href="../tables/regular.html">
                                        <span class="sidebar-mini">RT</span>
                                        <span class="sidebar-normal">Regular Tables</span>
                                    </a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="../tables/extended.html">
                                        <span class="sidebar-mini">ET</span>
                                        <span class="sidebar-normal">Extended Tables</span>
                                    </a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="../tables/bootstrap-table.html">
                                        <span class="sidebar-mini">BT</span>
                                        <span class="sidebar-normal">Bootstrap Table</span>
                                    </a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="../tables/datatables.net.html">
                                        <span class="sidebar-mini">DT</span>
                                        <span class="sidebar-normal">DataTables.net</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="collapse" href="#mapsExamples">
                            <i class="nc-icon nc-pin-3"></i>
                            <p>
                                Maps
                                <b class="caret"></b>
                            </p>
                        </a>
                        <div class="collapse " id="mapsExamples">
                            <ul class="nav">
                                <li class="nav-item ">
                                    <a class="nav-link" href="../maps/google.html">
                                        <span class="sidebar-mini">GM</span>
                                        <span class="sidebar-normal">Google Maps</span>
                                    </a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="../maps/vector.html">
                                        <span class="sidebar-mini">VM</span>
                                        <span class="sidebar-normal">Vector maps</span>
                                    </a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="../maps/fullscreen.html">
                                        <span class="sidebar-mini">FSM</span>
                                        <span class="sidebar-normal">Full Screen Map</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="../charts.html">
                            <i class="nc-icon nc-chart-bar-32"></i>
                            <p>Charts</p>
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link" href="../calendar.html">
                            <i class="nc-icon nc-single-copy-04"></i>
                            <p>Calendar</p>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="collapse" href="#pagesExamples">
                            <i class="nc-icon nc-puzzle-10"></i>
                            <p>
                                Pages
                                <b class="caret"></b>
                            </p>
                        </a>
                        <div class="collapse " id="pagesExamples">
                            <ul class="nav">
                                <li class="nav-item ">
                                    <a class="nav-link" href="../pages/login.html">
                                        <span class="sidebar-mini">LP</span>
                                        <span class="sidebar-normal">Login Page</span>
                                    </a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="../pages/register.html">
                                        <span class="sidebar-mini">RP</span>
                                        <span class="sidebar-normal">Register Page</span>
                                    </a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link" href="../pages/lock.html">
                                        <span class="sidebar-mini">LSP</span>
                                        <span class="sidebar-normal">Lock Screen Page</span>
                                    </a>
                                </li>
                                <li class="nav-item  ">
                                    <a class="nav-link" href="../pages/user.html">
                                        <span class="sidebar-mini">UP</span>
                                        <span class="sidebar-normal">User Page</span>
                                    </a>
                                </li>
                                <li class="nav-item  ">
                                    <a class="nav-link" href="#lbd">
                                        <span class="sidebar-mini">MCS</span>
                                        <span class="sidebar-normal">More coming soon...</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="main-panel">
            <!-- Navbar -->
            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <div class="navbar-wrapper">
                        <div class="navbar-minimize">
                            <button id="minimizeSidebar" class="btn btn-warning btn-fill btn-round btn-icon d-none d-lg-block">
                                <i class="fa fa-ellipsis-v visible-on-sidebar-regular"></i>
                                <i class="fa fa-navicon visible-on-sidebar-mini"></i>
                            </button>
                        </div>
                        <a class="navbar-brand" href="#pablo"> Extended Forms </a>
                    </div>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-bar burger-lines"></span>
                        <span class="navbar-toggler-bar burger-lines"></span>
                        <span class="navbar-toggler-bar burger-lines"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end">
                        <ul class="nav navbar-nav mr-auto">
                            <form class="navbar-form navbar-left navbar-search-form" role="search">
                                <div class="input-group">
                                    <i class="nc-icon nc-zoom-split"></i>
                                    <input type="text" value="" class="form-control" placeholder="Search...">
                                </div>
                            </form>
                        </ul>
                        <ul class="navbar-nav">
                            <li class="dropdown nav-item">
                                <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                                    <i class="nc-icon nc-planet"></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Create New Post</a>
                                    <a class="dropdown-item" href="#">Manage Something</a>
                                    <a class="dropdown-item" href="#">Do Nothing</a>
                                    <a class="dropdown-item" href="#">Submit to live</a>
                                    <li class="divider"></li>
                                    <a class="dropdown-item" href="#">Another action</a>
                                </ul>
                            </li>
                            <li class="dropdown nav-item">
                                <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                                    <i class="nc-icon nc-bell-55"></i>
                                    <span class="notification">5</span>
                                    <span class="d-lg-none">Notification</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Notification 1</a>
                                    <a class="dropdown-item" href="#">Notification 2</a>
                                    <a class="dropdown-item" href="#">Notification 3</a>
                                    <a class="dropdown-item" href="#">Notification 4</a>
                                    <a class="dropdown-item" href="#">Notification 5</a>
                                </ul>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="nc-icon nc-bullet-list-67"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item" href="#">
                                        <i class="nc-icon nc-email-85"></i> Messages
                                    </a>
                                    <a class="dropdown-item" href="#">
                                        <i class="nc-icon nc-umbrella-13"></i> Help Center
                                    </a>
                                    <a class="dropdown-item" href="#">
                                        <i class="nc-icon nc-settings-90"></i> Settings
                                    </a>
                                    <div class="divider"></div>
                                    <a class="dropdown-item" href="#">
                                        <i class="nc-icon nc-lock-circle-open"></i> Lock Screen
                                    </a>
                                    <a href="#" class="dropdown-item text-danger">
                                        <i class="nc-icon nc-button-power"></i> Log out
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!-- End Navbar -->
            <div class="content">
                <div class="container-fluid">
                    <div class="container-fluid">
                        <div class="card">
                            <div class="card-body">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <h4 class="title">Datetime Picker</h4>
                                            <div class="form-group">
                                                <input id="datetimepicker" type="text" class="form-control datetimepicker" placeholder="Datetime Picker Here" />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <h4 class="title">Date Picker</h4>
                                            <div class="form-group">
                                                <input type="text" class="form-control datepicker" placeholder="Date Picker Here" />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <h4 class="title">Time Picker</h4>
                                            <div class="form-group">
                                                <input type="text" class="form-control timepicker" placeholder="Time Picker Here" />
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h4 class="title">Switches</h4>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <p class="category">Default</p>
                                                    <input type="checkbox" checked="" data-toggle="switch" data-on-color="info" data-off-color="info">
                                                    <span class="toggle"></span>
                                                    <input type="checkbox" data-toggle="switch" data-on-color="info" data-off-color="info">
                                                    <span class="toggle"></span>
                                                </div>
                                                <div class="col-md-4">
                                                    <p class="category">Plain</p>
                                                    <input type="checkbox" checked="" data-toggle="switch" data-on-color="info" data-off-color="info" data-on-text="" data-off-text="">
                                                    <span class="toggle"></span>
                                                    <input type="checkbox" data-toggle="switch" data-on-color="info" data-off-color="info" data-on-text="" data-off-text="">
                                                    <span class="toggle"></span>
                                                </div>
                                                <div class="col-md-4">
                                                    <p class="category">With Icons</p>
                                                    <input type="checkbox" checked="" data-toggle="switch" data-on-color="info" data-off-color="info" data-on-text="<i class='fa fa-check'></i>" data-off-text="<i class='fa fa-times'></i>">
                                                    <span class="toggle"></span>
                                                    <input type="checkbox" data-toggle="switch" data-on-color="info" data-off-color="info" data-on-text="<i class='fa fa-check'></i>" data-off-text="<i class='fa fa-times'></i>">
                                                    <span class="toggle"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h4 class="title">Tags</h4>
                                            <!-- You can change "tag-azure" with with "tag-blue", "tag-green", "tag-orange","tag-red" and you can also add "tag-fill" for having filled tags -->
                                            <div id="badge">
                                                Regular:
                                                <input type="text" value="Minimal, Light, New, Friends" data-role="tagsinput" /> Filled:
                                                <input data-role="tagsinput" class="tagsinput badge-azure badge-fill" value="Design & UI, Inspiration, Business, Lifestyle" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <h4 class="title">Customisable Select</h4>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <select name="cities" class="selectpicker" data-title="Single Select" data-style="btn-default btn-outline" data-menu-style="dropdown-blue">
                                                        <option value="id">Bahasa Indonesia</option>
                                                        <option value="ms">Bahasa Melayu</option>
                                                        <option value="ca">Català</option>
                                                        <option value="da">Dansk</option>
                                                        <option value="de">Deutsch</option>
                                                        <option value="en">English</option>
                                                        <option value="es">Español</option>
                                                        <option value="el">Eλληνικά</option>
                                                        <option value="fr">Français</option>
                                                        <option value="it">Italiano</option>
                                                        <option value="hu">Magyar</option>
                                                        <option value="nl">Nederlands</option>
                                                        <option value="no">Norsk</option>
                                                        <option value="pl">Polski</option>
                                                        <option value="pt">Português</option>
                                                        <option value="fi">Suomi</option>
                                                        <option value="sv">Svenska</option>
                                                        <option value="tr">Türkçe</option>
                                                        <option value="is">Íslenska</option>
                                                        <option value="cs">Čeština</option>
                                                        <option value="ru">Русский</option>
                                                        <option value="th">ภาษาไทย</option>
                                                        <option value="zh">中文 (简体)</option>
                                                        <option value="zh-TW">中文 (繁體)</option>
                                                        <option value="ja">日本語</option>
                                                        <option value="ko">한국어</option>
                                                    </select>
                                                </div>
                                                <div class="col-md-6">
                                                    <select multiple data-title="Multiple Select" name="currency" class="selectpicker" data-style="btn-info btn-fill btn-block" data-menu-style="dropdown-blue">
                                                        <option value="ARS">ARS</option>
                                                        <option value="AUD">AUD</option>
                                                        <option value="BRL">BRL</option>
                                                        <option value="CAD">CAD</option>
                                                        <option value="CHF">CHF</option>
                                                        <option value="CNY">CNY</option>
                                                        <option value="CZK">CZK</option>
                                                        <option value="DKK">DKK</option>
                                                        <option value="EUR">EUR</option>
                                                        <option value="GBP">GBP</option>
                                                        <option value="HKD">HKD</option>
                                                        <option value="HUF">HUF</option>
                                                        <option value="IDR">IDR</option>
                                                        <option value="ILS">ILS</option>
                                                        <option value="INR">INR</option>
                                                        <option value="JPY">JPY</option>
                                                        <option value="KRW">KRW</option>
                                                        <option value="MYR">MYR</option>
                                                        <option value="MXN">MXN</option>
                                                        <option value="NOK">NOK</option>
                                                        <option value="NZD">NZD</option>
                                                        <option value="PHP">PHP</option>
                                                        <option value="PLN">PLN</option>
                                                        <option value="RUB">RUB</option>
                                                        <option value="SEK">SEK</option>
                                                        <option value="SGD">SGD</option>
                                                        <option value="TWD">TWD</option>
                                                        <option value="USD">USD</option>
                                                        <option value="VND">VND</option>
                                                        <option value="ZAR">ZAR</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                    <br />
                                    <div class="row">
                                        <div class="col-md-6">
                                            <h4 class="title">Progress Bar</h4>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 30%;">
                                                    <span class="sr-only">60% Complete</span>
                                                </div>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
                                                    <span class="sr-only">60% Complete</span>
                                                </div>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar progress-bar-success" style="width: 35%">
                                                    <span class="sr-only">35% Complete (success)</span>
                                                </div>
                                                <div class="progress-bar progress-bar-warning" style="width: 20%">
                                                    <span class="sr-only">20% Complete (warning)</span>
                                                </div>
                                                <div class="progress-bar progress-bar-danger" style="width: 10%">
                                                    <span class="sr-only">10% Complete (danger)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <h4 class="title">Sliders</h4>
                                            <div id="sliderRegular" class="slider-info"></div>
                                            <br>
                                            <div id="sliderDouble" class="slider-success"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end card -->
                    </div>
                </div>
            </div>
            <footer class="footer">
                <div class="container">
                    <nav>
                        <ul class="footer-menu">
                            <li>
                                <a href="#">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Company
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Blog
                                </a>
                            </li>
                        </ul>
                        <p class="copyright text-center">
                            ©
                            <script>
                                document.write(new Date().getFullYear())
                            </script>
                            <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
                        </p>
                    </nav>
                </div>
            </footer>
        </div>
    </div>
    <div class="fixed-plugin">
        <div class="dropdown show-dropdown">
            <a href="#" data-toggle="dropdown">
                <i class="fa fa-cog fa-2x"> </i>
            </a>
            <ul class="dropdown-menu">
                <li class="header-title"> Sidebar Style</li>
                <li class="adjustments-line">
                    <a href="javascript:void(0)" class="switch-trigger">
                        <p>Background Image</p>
                        <label class="switch-image">
                            <input type="checkbox" data-toggle="switch" checked="" data-on-color="info" data-off-color="info">
                            <span class="toggle"></span>
                        </label>
                        <div class="clearfix"></div>
                    </a>
                </li>
                <li class="adjustments-line">
                    <a href="javascript:void(0)" class="switch-trigger">
                        <p>Sidebar Mini</p>
                        <label class="switch-mini">
                            <input type="checkbox" data-toggle="switch" data-on-color="info" data-off-color="info">
                            <span class="toggle"></span>
                        </label>
                        <div class="clearfix"></div>
                    </a>
                </li>
                <li class="adjustments-line">
                    <a href="javascript:void(0)" class="switch-trigger">
                        <p>Fixed Navbar</p>
                        <label class="switch-nav">
                            <input type="checkbox" data-toggle="switch" data-on-color="info" data-off-color="info">
                            <span class="toggle"></span>
                        </label>
                        <div class="clearfix"></div>
                    </a>
                </li>
                <li class="adjustments-line">
                    <a href="javascript:void(0)" class="switch-trigger background-color">
                        <p>Filters</p>
                        <div class="pull-right">
                            <span class="badge filter badge-black" data-color="black"></span>
                            <span class="badge filter badge-azure" data-color="azure"></span>
                            <span class="badge filter badge-green" data-color="green"></span>
                            <span class="badge filter badge-orange active" data-color="orange"></span>
                            <span class="badge filter badge-red" data-color="red"></span>
                            <span class="badge filter badge-purple" data-color="purple"></span>
                        </div>
                        <div class="clearfix"></div>
                    </a>
                </li>
                <li class="header-title">Sidebar Images</li>
                <li class="active">
                    <a class="img-holder switch-trigger" href="javascript:void(0)">
                        <img src="../../assets/img/sidebar-1.jpg" alt="" />
                    </a>
                </li>
                <li>
                    <a class="img-holder switch-trigger" href="javascript:void(0)">
                        <img src="../../assets/img/sidebar-3.jpg" alt="" />
                    </a>
                </li>
                <li>
                    <a class="img-holder switch-trigger" href="javascript:void(0)">
                        <img src="../../assets/img/sidebar-4.jpg" alt="" />
                    </a>
                </li>
                <li>
                    <a class="img-holder switch-trigger" href="javascript:void(0)">
                        <img src="../../assets/img/sidebar-5.jpg" alt="" />
                    </a>
                </li>
                <li class="button-container">
                    <div>
                        <a href="http://www.creative-tim.com/product/light-bootstrap-dashboard" target="_blank" class="btn btn-info btn-block">Get free demo!</a>
                    </div>
                </li>
                <li class="button-container">
                    <div>
                        <a href="http://www.creative-tim.com/product/light-bootstrap-dashboard-pro" target="_blank" class="btn btn-warning btn-block">Buy now!</a>
                    </div>
                </li>
                <li class="button-container">
                    <div>
                        <a href="https://demos.creative-tim.com/light-bootstrap-dashboard-pro/documentation/tutorial-components.html" target="_blank" class="btn btn-danger btn-block">Documention</a>
                    </div>
                </li>
                <li class="header-title" id="sharrreTitle">Thank you for sharing!</li>
                <li class="button-container">
                    <button id="twitter" class="btn btn-social btn-twitter btn-round twitter-sharrre"><i class="fa fa-twitter"></i> · 256</button>
                    <button id="facebook" class="btn btn-social btn-facebook btn-round facebook-sharrre"><i class="fa fa-facebook-square"></i> · 426</button>
                </li>
            </ul>
        </div>
    </div>
</body>

<%@include file="../includes/jsInclude.jsp" %>

</html>