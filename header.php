<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <link rel="icon" href="./assets/images/common/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>エスアイ・システム　中途採用サイト</title>
  <link rel="stylesheet" href="./assets/css/style.min.css?<?php echo date('YmdHis') ?>">
  <link rel="stylesheet" href="./assets/css/swiper.min.css">
  <script type="text/javascript" src="//typesquare.com/3/tsst/script/ja/typesquare.js?5dc2538e8b5c4014988470d9e90393a3" charset="utf-8"></script>

  <?php $self_name = basename($_SERVER['PHP_SELF']);
  $top = 'index.php';
  $concept = 'page-concept.php';
  $company = 'page-company.php';
  $data = 'page-data.php';
  $works = 'page-works.php';
  $career = 'page-career.php';
  $interview = 'page-interview.php';
  $crossTalk = 'page-crosstalk.php';


  if ($top === $self_name) {
    echo '<link rel="stylesheet" href="./assets/css/pages/top/index.min.css">';
    echo '<script src="./assets/js/pages/top/index.min.js" defer></script>';
  } else if ($concept === $self_name) {
    echo '<link rel="stylesheet" href="./assets/css/pages/concept/index.min.css">';
  } else if ($company === $self_name) {
    echo '<link rel="stylesheet" href="./assets/css/pages/company/index.min.css">';
  } else if ($data === $self_name) {
    echo '<link rel="stylesheet" href="./assets/css/pages/data/index.min.css">';
  } else if ($works === $self_name) {
    echo '<link rel="stylesheet" href="./assets/css/pages/works/index.min.css">';
    echo '<script src="./assets/js/pages/works/index.min.js" defer></script>';
  } else if ($career === $self_name) {
    echo '<link rel="stylesheet" href="./assets/css/pages/career/index.min.css">';
    echo '<script src="./assets/js/pages/career/index.min.js" defer></script>';
  }  else if ($interview === $self_name) {
    echo '<link rel="stylesheet" href="./assets/css/pages/interview/index.min.css">';
    echo '<script src="./assets/js/pages/interview/index.min.js" defer></script>';
  } else if ($crossTalk === $self_name) {
    echo '<link rel="stylesheet" href="./assets/css/pages/crosstalk/index.min.css">';
  }
  ?>

</head>

<body>
  <header class="l-header u-d-f" id="js-header">
    <a href="./" class="l-header__logo">
      <img src="./assets/images/common/logo.svg" alt="株式会社エスアイ・システムのロゴ">
      <span class="l-header__logo__text">キャリア採用サイト</span>
    </a>
    <div class="l-header__button u-d-f">
      <a href="archive-entry.php" class="l-header__entry c-fontEn">ENTRY</a>
      <button class="l-hamburger" type="button" id="js-hamburger">
        <span class="l-hamburger__lines">
          <span class="l-hamburger__line"></span>
          <span class="l-hamburger__line"></span>
          <span class="l-hamburger__line"></span>
        </span>
      </button>
    </div>
    <div class="l-headerNav" id="js-headerNav">
      <div class="l-headerNav__wrap">
        <div class="l-headerNav__contents">
          <ul class="l-headerNav__list">
            <li class="l-headerNav__item">
              <a href="page-concept.php" class="l-headerNav__link">
                <span class="l-headerNav__en c-fontEn">CONCEPT</span>
                <span class="l-headerNav__ja">コンセプト</span>
              </a>
            </li>
            <li class="l-headerNav__item">
              <a href="page-company.php" class="l-headerNav__link">
                <span class="l-headerNav__en c-fontEn">COMPANY</span>
                <span class="l-headerNav__ja">会社紹介</span>
              </a>
            </li>
            <li class="l-headerNav__item">
              <a href="page-data.php" class="l-headerNav__link">
                <span class="l-headerNav__en c-fontEn">DATA</span>
                <span class="l-headerNav__ja">データで見るエスアイシステム</span>
              </a>
            </li>
            <li class="l-headerNav__item">
              <a href="page-works.php" class="l-headerNav__link">
                <span class="l-headerNav__en c-fontEn">WORKS</span>
                <span class="l-headerNav__ja">仕事内容・応募要項</span>
              </a>
            </li>
          </ul>
          <ul class="l-headerNav__list">
            <li class="l-headerNav__item">
              <a href="page-career.php" class="l-headerNav__link">
                <span class="l-headerNav__en c-fontEn">CAREER</span>
                <span class="l-headerNav__ja">研修制度・キャリアパス</span>
              </a>
            </li>
            <li class="l-headerNav__item">
              <a href="page-interview.php" class="l-headerNav__link">
                <span class="l-headerNav__en c-fontEn">INTERVIEW</span>
                <span class="l-headerNav__ja">社員インタビュー</span>
              </a>
            </li>
            <li class="l-headerNav__item">
              <a href="page-crosstalk.php" class="l-headerNav__link">
                <span class="l-headerNav__en c-fontEn">CROSS TALK</span>
                <span class="l-headerNav__ja">座談会</span>
              </a>
            </li>
          </ul>
        </div>
        <a href="https://www.si-system.jp/" target="_blank" rel="noopener noreferrer" class="l-headerNav__corporate">
          <p class="l-headerNav__corporate__text c-bold">企業サイトへ</p>
          <img loading="lazy" class="l-headerNav__arrow" src="./assets/images/common/arrow_white.svg">
        </a>
      </div>
    </div>
  </header>