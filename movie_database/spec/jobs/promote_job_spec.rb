require "rails_helper"

RSpec.describe PromoteJob, type: :job do
  describe "#perform_later" do
    let!(:movie) { FactoryBot.create(:movie) }
    subject(:job) { PromoteJob.perform_later(movie) }

    before(:each) do
      ActiveJob::Base.queue_adapter = :test
    end

    it "matches with enqueued job" do
      expect { job }.to have_enqueued_job(PromoteJob)
    end
  end
end
