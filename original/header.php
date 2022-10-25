<?php

/**
 * The header for our theme.
 */
?>
<!doctype html>
<html <?php language_attributes(); ?>>

<head>
  <!-- Google Tag Manager -->
  <!-- End Google Tag Manager -->
  <link rel="icon" href="<?php echo get_template_directory_uri(); ?>/images/favicon.ico">
  <meta name="format-detection" content="telephone=no">
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title></title>
  <?php wp_head(); ?>
  <meta name="description" content="">
  <!--facebook & その他SNSの設定-->
  <meta property="og:title" content="会社名" />
  <meta property="og:type" content="website" />
  <meta property="og:description" content="" />
  <meta property="og:url" content="http://" />
  <meta property="og:site_name" content="会社名" />
  <meta property="og:image" content="<?php bloginfo('template_url'); ?>/images/ogp.png" />
  <meta name="keywords" content="">
  <!--twitterの設定-->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="http://55369.jp/">
  <!-- <meta name="twitter:image" content="<?php bloginfo('template_url'); ?>/images/ogp.png" /> -->
  <meta name="twitter:title" content="会社名">
  <meta name="twitter:description" content="">
  <!-- CSS読み込み↓ -->
  <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/css/application.css">
  <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700;900&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Caveat+Brush&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <!-- JS読み込み↓ -->
  <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
  <?php
  wp_enqueue_script('jquery');
  wp_enqueue_script('app', get_template_directory_uri() . '/js/app.js');
  wp_head();
  ?>
</head>

<body>

  <header class="header">
    <div class="gnav">
      <div class="gnav__inner">
        <ul class="gnav-list">
          <li class="gnav-item">
          </li>
          <li class="gnav-item">
          </li>
          <li class="gnav-item">
          </li>
          <li class="gnav-item">
          </li>
          <li class="gnav-item">
          </li>
          <li class="gnav-item">
          </li>
        </ul>
        <div class="sp" id="sp-header">
          <div class="logo">
            <img src="<?php bloginfo('template_directory'); ?>/images/top_logo.svg" alt="sp_logo" class="">
          </div>
          <div class="sp-menu" id="sp-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span>MENU</span>
          </div>
          <div class="sp-close" id="sp-menu">
            <img src="<?php bloginfo('template_directory'); ?>/images/close.svg" alt="" class="">
            <span>CLOSE</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <a href="#" class="" id="page-top">PAGE TOP</a>