#FROM php:5.6-cli
#FROM your-registry/laragon:php-7.4.33-Win32-vc15-x64

#RUN apt-get update && \
#    apt-get install -y git zip unzip && \
#    apt-get -y autoremove && \
#    apt-get clean && \
#    curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer && \
#    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

#WORKDIR /opt/mockery

#COPY composer.json ./

#RUN composer install


# Usa Laragon con PHP 7.4.33 como contenedor base para Windows
FROM your-registry/laragon:php-7.4.33-Win32-vc15-x64

# Instala git, zip, unzip usando PowerShell (cmdlet)
SHELL ["powershell", "-Command", "$ErrorActionPreference = 'Stop'; $ProgressPreference = 'SilentlyContinue';"]

RUN Install-PackageProvider -Name chocolatey -Force -RequiredVersion 2.8.5.130 -Force; \
    Install-Package -Name git -Force -RequiredVersion 2.27.0 -Force; \
    Install-Package -Name unzip -Force -RequiredVersion 6.0 -Force;

# Instala Composer usando PowerShell
RUN Invoke-WebRequest -Uri 'https://getcomposer.org/installer' -OutFile 'composer-setup.php'; \
    php composer-setup.php --install-dir=/usr/local/bin --filename=composer; \
    Remove-Item composer-setup.php;

WORKDIR /opt/mockery

COPY composer.json ./

# Instala las dependencias usando Composer
RUN composer install
