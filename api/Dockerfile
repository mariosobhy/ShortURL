FROM ruby:2.7.2

RUN apt-get update && apt-get install -y nodejs --no-install-recommends && rm -rf /var/lib/apt/lists/*

RUN apt-get update && apt-get install -y postgresql-client sqlite3 --no-install-recommends && rm -rf /var/lib/apt/lists/*

RUN apt-get update && apt-get install -y cron vim --no-install-recommends

ENV RAILS_VERSION 6.0.3.4

RUN gem install sprockets -v 3.7.2

RUN gem install rails --version "$RAILS_VERSION"
RUN mkdir /api
RUN mkdir /log
WORKDIR /api
ADD Gemfile /api/Gemfile
ADD Gemfile.lock /api/Gemfile.lock
RUN bundle install
COPY . /api

EXPOSE 3000