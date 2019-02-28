# frozen_string_literal: true

module DataProcessing
  extend ActiveSupport::Concern
  # Simple processing method
  def language_processing(object = "")
    @languages    = object.flat_map { |item| item["language"] }
    @process      = @languages.group_by(&:itself).transform_values(&:count)
    @results      = @process.flat_map { |key, _value| key }.reject(&:blank?)
    @winner       = @results.first
  end
end
