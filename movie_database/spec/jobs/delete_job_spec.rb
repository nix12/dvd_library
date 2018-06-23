require 'rails_helper'

RSpec.describe DeleteJob, type: :job do
  describe "#perform_later" do
    let!(:movie) { FactoryBot.create(:movie) }
    subject(:job) { DeleteJob.perform_later(movie) }

    before(:each) do
      ActiveJob::Base.queue_adapter = :test
    end

    it "matches with enqueued job" do
      expect { job }.to have_enqueued_job(DeleteJob)
    end
  end
end
